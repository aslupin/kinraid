arr = []
txtline = list()
txtfile = open('food.txt')
for line in txtfile:
    txtline.append(line.split())

# print(txtline)
for i in range(len(txtline)):
    txtline[i][1] = 'ปริมาณแคลอรี่: ' + txtline[i][1][:] + ' kcal'
    txtline[i][2] = 'ความเผ็ด: ' + txtline[i][2][:]
    # txtline[i][3] = 'ราคา: ' + txtline[i][3][:] + ' บาท'
    txtline[i][3] = 'ราคา: ' + txtline[i][3][:]

arr.append(txtline)
let_str = str(arr[0])
print(let_str.replace('],','],\n'))
    
    