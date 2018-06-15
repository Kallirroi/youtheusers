import sys 
import itertools
import re


filename = sys.argv[1]
count = 1
# clean the ">>" characters as well as space returns
with open(filename) as f1, open(filename + '-clean.txt', 'w') as f2:
    for line in f1:
        if re.match("^[a-zA-Z]", line):
            print (line)
            f2.write(line)
        count+=1
