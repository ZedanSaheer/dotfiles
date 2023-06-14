echo "enter first number"
read n 
a=0 
b=1 
echo "the fib series is "
for ((i=0;i<=n;i++))
do
echo -n $a
c=$(($a+$b))
a=$b
b=$c
echo ""
done