# Bash Vs Shell Scripting

```
Shell is an interface between a user and OS to access to an operating system's services. It can be either GUI or CLI (Command Line interface).

sh (Bourne shell) is a shell command-line interpreter, for Unix/Unix-like operating systems. It provides some built-in commands. In scripting language we denote interpreter as #!/bin/sh. It was one most widely supported by other shells like bash (free/open), kash (not free).

Bash (Bourne again shell) is a shell replacement for the Bourne shell. Bash is superset of sh. Bash supports sh. POSIX is a set of standards defining how POSIX-compliant systems should work. Bash is not actually a POSIX compliant shell. In a scripting language we denote the interpreter as #!/bin/bash.
```

# subprocess.call() vs subprocess.Popen()

```
open doesn't block, allowing you to interact with the process while it's running, or continue with other things in your Python program. The call to Popen returns a Popen object.

call does block. While it supports all the same arguments as the Popen constructor, so you can still set the process' output, environmental variables, etc., your script waits for the program to complete, and call returns a code representing the process' exit status.
```