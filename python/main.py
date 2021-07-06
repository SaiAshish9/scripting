import subprocess

cmd = 'python3 script.py'

p= subprocess.Popen(cmd,shell=True)
out,err = p.communicate()

print(out)
print(err)

subprocess.call(cmd,shell=True)

print('done')