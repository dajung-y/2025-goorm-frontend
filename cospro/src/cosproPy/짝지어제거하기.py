string1 = 'baabaa'
string2 = 'cdcd'

def solution(str):
  stack = []
  for s in str:
    if not stack:
      stack.append(s)
    elif stack[-1] == s:
      stack.pop()
    else:
      stack.append(s)
  if not stack:
    return 1
  else:
    return 0

print(solution(string1));
print(solution(string2));
