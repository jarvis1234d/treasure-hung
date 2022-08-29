#!/usr/bin/python

# import qrcode
import hashlib


# for i in range(11,40):
# 	result = bytes(str(i), 'utf-8')
# 	result = hashlib.md5(result)
# 	data = 'YOUR LINK HERE' + result.hexdigest()
 
# 	# Encoding data using make() function
# 	img = qrcode.make(data)
	 
# 	# Saving as an image file
# 	img.save('My'+ str(i) + '.png')

print(hashlib.md5("demo"))