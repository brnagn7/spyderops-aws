#
# File:		weather.py
#
# pip install pyowm
import pyowm 

# constants
YELLOW = ('\033[1;33m') 
RED = ('\033[1;31m') 
MAGENTA = ('\033[1;35m') 
BLUE = ('\033[1;34m') 
GREEN = ('\033[1;32m')
END = ('\033[1;m')

# you need to sign up for your onw API key
owm = pyowm.OWM('682279a38a0d67660e26562480875681')
town = raw_input("Enter the Town and State  ")
obs = owm.weather_at_place(town)
w = obs.get_weather()
wind = w.get_wind()
speed = wind['speed']
tempc = w.get_temperature('celsius')
tempf = w.get_temperature('fahrenheit')
maxc = tempc['temp_max']
minc = tempc['temp_min']
maxf = tempf['temp_max']
minf = tempf['temp_min']
tomorrow = pyowm.timeutils.tomorrow()
city = obs.get_location()
stat = w.get_detailed_status()
#print (w)
#print (wind)
#print (temp)
#print (tomorrow)
#print (city.get_name())
print ("\n")
print (MAGENTA + "The General weather conditions are ({0})".format(stat))
print (YELLOW + "The Max Temp in Centigrade is {0} C - with a Minimum today of {1} C".format(maxc, minc)) + END
print (BLUE + "The Max Temp in Fahrenheit is {0} F - with a Minimum today of {1} F".format(maxf, minf)) + END
print (MAGENTA + "The wind speed is {0}".format(speed)) + END
print ("\n")