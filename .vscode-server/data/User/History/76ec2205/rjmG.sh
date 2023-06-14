echo "enter file name :"
read file
line=$((cat $file |wc-l))
word=$((cat $file |wc-w))
chars=$((cat $file |wc-c))
echo $file contains $line $word $chars