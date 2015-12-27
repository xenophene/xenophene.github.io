# takes a linklist_(month).dat file and downloads all the nytimes pages that
# whose links are listed in the file. it also parses these pages to extract
# useful content that is the actual news article
import httplib;
import re;
import BeautifulSoup;
linkfile ='linklist_jan.dat';
infile = open(linkfile, 'r');
links = infile.read();
infile.close();
links = links.split('\n');
for link in links:
    conn = httplib.HTTPConnection('10.10.78.62',3128);
    truelink = 'http://' + link.split(' ')[1] + '?pagewanted=all';
    conn.request('GET', truelink);
    response = conn.getresponse();
    data = response.read();
    soup = BeautifulSoup.BeautifulSoup(data);
    for elem in soup.findAll('script'):
        elem.extract();
    data = str(soup);
##    for elem in root.iter('script'):
##        elem.drop_tree();
##    p = re.compile("<script.*?</script>");
##    data = p.sub('', data);
    conn.close();
    print link;
    outfile = open('NewsStories/01/' + link.split(' ')[1].split('/')[-1],'w');
    outfile.write(data);
    outfile.close();
##print data;
##patt = '''class="mod-nytimesarticletext.*?</div>''';
##match = re.findall(patt, data);
##print match[0];
