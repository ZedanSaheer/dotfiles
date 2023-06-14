echo "enter a number"
s=0
p=$n 
sum=0
while (($n>0))
do
r=(($n%10))
s=(($s*10+$r))
sum=$(($sum+$r))
