#!usr/bin/env python
import os;
import urllib;
import urllib2;
import httplib;
import re;

# This function will attempt to get the headlines for the news articles
# It will take the first *few words in the news document which we know to be
# the headlines and then query Google with those words followed by 'ny times'.
# The hope is that the first link returned by Google would be that of the
# news article whose URL actually encodes the headline of the article

# year is fixed to be 1992 for the current situation
year = '1992';

# N is the number of words that will be considered : Experimental
N = 15;

# the relevant files to election have already been mined and we use them
#filebankset = ['relevant_articles_3.txt', 'relevant_articles_9.txt',
#                'relevant_articles_10+11.txt' ];
filebankset = ['relevant_articles_1.txt'];
#filebank is the list of files for a given theme
for filebank in filebankset:
    infile = open(filebank, 'r');
    files = infile.read();
    files = files.replace('\r', '');
    files = files.split('\n');
    infile.close();
    headlineset = os.listdir('./Headlines/1');
    for filename in files:
        if './1/' in filename or filename == '':
            continue;
        # infile is the handle to the news articles
        infile = open(filename, 'r');

        # read and aggregate the first N words of the news articles
        lines = infile.read();
        infile.close();
        lines = lines.replace('&amp' , '');
        lines = lines.split('\n');
        words = lines[3].split(' ');
        headline_query = words[0:N].replace(" ", "+");
#        headline_query = '';
#        for i in range(0, N):
#            headline_query += words[i] + '+';
            
        search_query = headline_query + '+site%3Anytimes.com';
        print search_query;

        # now this search query will be supplied to Google and the result page
        # will be retrieved and parsed for the first link which if is a 
        # nytimes article, will *most probably* be the exact article itself

        conn = httplib.HTTPConnection("10.10.78.62", 3128);
        conn.request("GET", "http://www.google.com/search?q=" + search_query);
        response = conn.getresponse()
        data = response.read()
        conn.close()

        # Now that the response has been stored in data, we need to look for 
        # nytimes link in the set of results and then find the actual headline

        patt = 'nytimes.com/' + year + '.*?html';
        match = re.search(patt, data);
        try:
            url = match.group(0);
        except:
            print data;
            continue;
        url = url.split('/');
        headline = url[-1];
        headline = headline.replace('-', ' ');
        headline = headline.replace('.html', '');

        # now that we have extracted the headline we need to write it back
        # to a file with the corresponding filename in the folder Headlines
        
        outfile = open('Headlines/' + filename, 'w');
        outfile.write(headline);
        outfile.close();
