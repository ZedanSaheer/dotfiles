echo "enter first number"
read a
echo "enter second number"
read b
echo "enter third number"
read c
if(($a>$b))&&(($a>c))
then
echo $a
elif(($b>$a))&&(($b>$c))
then
echo $b
else
echo $c
fi