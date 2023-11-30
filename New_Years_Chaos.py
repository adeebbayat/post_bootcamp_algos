q = [2,1,3,4]

def minimumBribes(q):
    for i in range(len(q)-1):
        counter = 0
        for j in range(len(q)-1):
            if(q[j] > q[j+1]):
                q[j],q[j+1] = q[j+1], q[j]
                counter = counter + 1
                if(counter > 2):
                    return "Too chaotic"
                
    pass
print(minimumBribes(q))


