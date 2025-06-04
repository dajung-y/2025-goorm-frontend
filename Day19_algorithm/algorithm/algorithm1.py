arr = list(map(int,input().split()))

# 예외처리
while True:
  m = int(input('배수가 될 m을 입력하세요: '))
  if m > 0 :
    break
  print('다시 입력하세요')

# 배열 정렬
arr.sort()
print(arr)

sum = 0
for i in range(1, len(arr)):
  if i % m == 0 :
    sum += arr[i]

print(sum)
  