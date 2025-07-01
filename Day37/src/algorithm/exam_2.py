x = input()
y= input()

def compare (x,y) :
  if len(x)> len(y) :
    return x
  else :
    return y
  
print(compare(x,y))