import json
import time
import os
import subprocess

def collectData():
    secondState = 0
    numOfPacketsPerSec = 0

    packetIndex = 0
    recodedData = [0] * 72

    matches = []

    #file os.listdir('.')
    for root, dirnames, filenames in os.walk('.'):
                    for filename in filenames:
                        if filename.startswith(('input_')):
                            matches.append(os.path.join(root, filename))

    print(matches[0][2:])
    cmd = "tshark -r " + matches[0][2:] + " -V -x > input.txt"
    os.system(cmd)
    print("completed")
    #print os.system("tshark -r " + inputFiles[0] + " -V -x > input.txt")
    file = open("input.txt","r")

    for line in file:
       li = line.strip()
       if 'Arrival Time' in line:
           time = line.replace("Arrival Time", "").replace(" ", "").rstrip()
           #print(time)
#            print(time[17:-13])
           if time[17:-13] == secondState:
               numOfPacketsPerSec += 1
           else:
               #print(numOfPacketsPerSec)
               recodedData[(packetIndex % 72)] = numOfPacketsPerSec
               packetIndex += 1

               with open("output.json", "w") as file:
                   json.dump({'results': recodedData}, file)

               numOfPacketsPerSec = 0

           secondState = time[17:-13]

    file.close()

while True:
    collectData()
    time.sleep(72)