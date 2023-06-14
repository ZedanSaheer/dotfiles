echo "enter first number"
read n 
s=0
p=$n 
while (($n>0))
do 
r=$((n%10))
s=$(($s+$r*$r*$r))
n=$((n/10))
done
if (($p==$s))
then 
echo "armstrong"
else 
echo "not armstrong"
fi