echo "enter first number"
read n 
fact=1
i=2
while (($i<=n))
do
fact=$(($fact*$i))
i=$(($i+1))
done
echo "Factorial " $fact