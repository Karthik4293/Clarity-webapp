import json
import re

diff_files = []
x = 0
with open("diff.log", 'r+') as f:
      for line in f:
          line = line.strip();
          if(not line): continue
          filename  = re.search('^([\S]+)', line).group(0)
          lc = line.split('|')
          temp = lc[1].strip()
         # try:
         #    print(lc[1])
         # except:
         #    print('oops')
          lines_changed = re.search('^([\S]+)', temp).group(0)
          #lines_changed = re.search('\|[\s]*([\d]+)', line).group(0)
          change_intensity = re.search('([\S]+)$', line).group(0)
          diff_files.append({"filename":filename, "lines_changed": lines_changed, "change_intensity":change_intensity})
      
      diff_files = {"diff_files": diff_files}
      print(json.dumps(diff_files))
