echo "enter a number"
read limit
n=2 
while (($n<=$limit))
do 
i=2 
f=0 
while (($i<$n))
do
if (($n%$i==0))
then
f=1
break;
fi
i=$((i+1))
done
if (($f==0))
then 
echo $n
fi
n=$(($n+1))
done