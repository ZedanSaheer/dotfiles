echo "enter first number"
read a
echo "enter second number"
read b
echo "enter third number"
read c
m=$((($a+$b+$c)/3))
p=$(($a-$m))
q=$(($b-$m))
r=$(($c-$m))
d=$((($p*$P+$q*$q+$r*$r)/3))
w=$(echo "sqrt($d)" |bc)
echo "Mean is " $m 
echo "Deviation is" $w 