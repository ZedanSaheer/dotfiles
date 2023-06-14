echo "enter a number"
s=0
p=$n 
sum=0
while (($n>=0))
do
r=$(($n%10))
sum=$(($sum+$r))
n=$(($sum/10))
done
echo "sum =" $sum