function clicked(s)
{
    if (s==0)
        document.getElementById('uprojs').innerHTML = "<li>Image Warping : <b><a href=\"http://www.cse.iitd.ernet.in/~pkalra\" target=\"_blank\">Prof. Prem Kalra</a></b>, CSE, IIT Delhi<br> Implemented the SIGGRAPH 2006 paper on \"Image Deformation using Moving Least Squares\" and compared to simple Delaunay Triangulation. Some results will be added soon. </li><br><li>Image Sketching : <b> <a href=\"http://www.cse.iitd.ernet.in/~pkalra\" target=\"_blank\">Prof. Prem Kalra</a></b>, CSE, IIT Delhi<br>  This was a fun assignment where we implemented a tool to create a pencil sketched version of a city map or a portrait. </li><br>These were done as part of the course Digital Image Analysis along with Jatinder.";
    else if (s==1)
        document.getElementById('uprojs').innerHTML = "<li>Assignments on <a href=\"http://www.stanford.edu/class/cs140/projects/pintos/pintos.html\" target=\"_blank\">PintOS</a> : <b><a href=\"http://www.cse.iitd.ernet.in/~sbansal\" target=\"_blank\">Dr. Sorav Bansal</a></b>, CSE, IIT Delhi<br> We implemented thread scheduling, system calls, virtual memory management, user programs & file system control. </li><br>I did 2 parts each with my batch mates Rahul & <a href=\"http://www.cse.iitd.ernet.in/~cs5080220/\" target=\"_blank\">Pranay</a>, both of whom have the gift of psychic intuition & was guided by Ashwin, our unofficial mentor. :)";
    else if (s==2)
        document.getElementById('uprojs').innerHTML = "<li>Time evolution of stock price correlations using <a href=\"http://en.wikipedia.org/wiki/Multidimensional_scaling\" target=\"_blank\">Multidimensional Scaling</a> : <b><a href=\"http://fiquant.mas.ecp.fr/chakraboa\" target=\"_blank\">Dr. Anirban Chakraborti</a></b>, MAS, &Eacute;cole Centrale Paris<br>Given a set of companies, we model distances between them using their stock price correlations and visualize the data using Multidimensional Scaling. This analysis was extended for different periods of time to highlight how the correlations vary by generating differential graphs. </li><br><li>Correlating share prices & company ratios in the Indian market : <b><a href=\"#\">Dr. Shveta Singh</a></b>, DMS, IIT Delhi<br>We studied the correlation patterns between company ratios and the share prices of certain large scale companies in various sectors of the Indian market. The correlation measure gives an insight into how fundamental the Indian market is. </li><br>";
    else if (s==3)
        document.getElementById('uprojs').innerHTML = "<li> <a href=\"http://www.cse.iitd.ernet.in/~aseth/assg/bwtests/bwprobing.html\" target=\"_blank\">Bandwidth Assignments</a> on Blackberry : <b><a href=\"http://www.cse.iitd.ernet.in/~aseth\" target=\"_blank\">Dr. Aaditeshwar Seth</a></b>, CSE, IIT Delhi<br> Our group implemented a few applications on the <a href=\"http://us.blackberry.com/developers/\" target=\"_blank\">Blackberry RIM</a> platform to study network characteristics for mobile devices inside the IIT campus. In my group were the ever enthusiastic, Rajwinder, Narinder and KnowledgeOcean (GyanSagar in Hindi). </li><br><li>P2P <a href=\"http://www.cse.iitd.ernet.in/~aseth/assg/bluetooth/bluetoothlogs.html\" target=\"_blank\">Bluetooth</a> transfers : <b><a href=\"http://www.cse.iitd.ernet.in/~aseth\" target=\"_blank\">Dr. Aaditeshwar Seth</a></b>, CSE, IIT Delhi<br> We studied some interesting properties of a community network of bluetooth devices. We investigated the possibility of file transfer in a P2P fashion within the network. </li><br><li>Activity Recognition using <a href=\"http://www.sunspotworld.com/\" target=\"_blank\">Sun SPOT</a> : <b><a href=\"http://www.cse.iitd.ernet.in/~vinay\" target=\"_blank\">Dr. Vinay Ribeiro</a></b>, CSE, IIT Delhi<br> We are currently designing a physical activity recognizer using Sun SPOT device to detect activities like standing up, running, sitting down, etc.</li><br>";
    else if (s==4)
        document.getElementById('uprojs').innerHTML = "<li> Logisim H/W Design Tool : <b><a href=\"http://www.cse.iitd.ernet.in/~anshul\" target=\"_blank\">Prof. Anshul Kumar</a></b>, CSE, IIT Delhi<br> Our group made changes to the Logisim design tool used at IIT Delhi and many other universities as part of the architecture course. The original software has been designed by <a href=\"http://ozark.hendrix.edu/~burch/\" target=\"_blank\">Dr. C. Burch</a>. In my group were <a href=\"http://www.cse.iitd.ernet.in/~cs5080208\" target=\"_blank\">Arunim</a> & Kshiteej, both brilliant programmers. The modified software is available <a href=\"http://www.cse.iitd.ernet.in/~cs5080214/download.html\" target=\"_blank\">here</a>.</li><br> <li> 2-D Ping Pong on SVGA : <b><a href=\"http://www.cse.iitd.ernet.in/~mbala\" target=\"_blank\">Prof. M Balakrishnan</a></b>, CSE, IIT Delhi<br> As part of my digital hardware course, we used the Virtex 2 Pro Digilent board (FPGA) to simulate a 2D ping pong game onto the VGA screen, coded up in VHDL. We also incorporated speed, level and 1 or 2 player modes. I worked with Utkarsh, who incidentally has the ability to communicate and talk in binary. </li><br><li>MIPS Simulator : <b><a href=\"http://www.cse.iitd.ernet.in/~anshul\" target=\"_blank\">Prof. Anshul Kumar</a></b>, CSE, IIT Delhi<br> We  designed a MIPS simulator using Logisim design software which implemented all the basic instructions of MIPS in the Multi-Cycle design approach. We extended this design to include exception handling of all the common exceptions like arithmetic, bad instruction, wrong address and external exceptions. </li><br>";
    else if (s==5)
        document.getElementById('uprojs').innerHTML = "These assignments were done as part of the software design course along with my group partner Simranjit, who doesn't mind being called Simran :)<br><br><li>VLSI Chip Router : <b><a href=\"http://www.cse.iitd.ernet.in/~panda\" target=\"_blank\">Dr. Preeti Ranjan Panda</a></b>, CSE, IIT Delhi<br> We designed a VLSI Chip router which took an input grid of size upto 5000X5000 along with the input pairs to be routed using A* algorithm with some heuristics. The output was displayed onto the screen as well as written onto a text file. </li><br><li>Operation Scheduler : <b><a href=\"http://www.cse.iitd.ernet.in/~panda\" target=\"_blank\">Dr. Preeti Ranjan Panda</a></b>, CSE, IIT Delhi<br> The objective was to come up with a time and/or resource optimum scheduling given a set of operations of certain type(s) (addition, division, etc), and a set of resource instances (2 adders, 3 dividers, etc) along with the delay and pre-requisite constraints. </li><br>";
    else if (s==6)
        document.getElementById('uprojs').innerHTML = "<li>News Corpus Analysis and Exploration : <b><a href=\"http://www.cse.iitd.ernet.in/~ramanath\" target=\"_blank\">Dr. Maya Ramanath</a></b> & <b><a href=\"http://www.cse.iitd.ernet.in/~bagchi\" target=\"_blank\">Dr. Amitabha Bagchi</a></b>, CSE, IIT Delhi<br>We are looking at the problem of studying the time evolution of a news corpus by drawing graphs out of the corpus.</li>";
    $('#uprojs').hide().fadeIn();
}
