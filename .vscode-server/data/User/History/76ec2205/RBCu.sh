echo "enter your string"
read string 
len=${#string}
for((i=$len-1;i>=0;i--))
do
reverse="$reverse ${string:$i:1}"
done
echo the reverse of \"string\" is \"$reverse\"


