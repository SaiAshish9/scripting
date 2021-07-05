#!/bin/bash
clear
echo "hello"
read -p "n:" n
echo "$n" >> n.txt
clear
echo -e "hi $n \nsaved"
cat n.txt
echo "bye"
sleep 2
