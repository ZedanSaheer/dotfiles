h=$(date +"$H")
if (($h<12))
then
echo "Good Morning"
elif (($h<18))
then 
echo "Good Afternoon"
else 
echo "Good Evening"
fi



