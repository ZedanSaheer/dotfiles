clear
i="y"
echo "enter first number"
read a
echo "enter second number"
read b
while (($i=="y"))
do 
echo "1.Addtion"
echo "2.Subtraction"
echo "3.Multiply"
echo "4.Divide"
echo "enter a choice"
read ch 
case $ch in 
1)res=$(($n1+$n2))
1)res=$(($n1+$n2))
echo "sum=" $res;;
