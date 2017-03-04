---
title: Big-O
date: 2017-02-28 12:17:43
tags: Notes
---



# Big O

```ruby
def another_procedure(array_one, array_two)
	array_one.each do |element_one|  # n
		array_two.each do |element_two|  # n * n
		puts "#{element_one} #{element_two}"
		end
	end
end
**  Big O(n ^ 2)


def procedure (array_one, array_two)
	array_one.each do |element_one|
		if array_two.include?(element_one)
			puts "Found the element!"
		end
	end
end
```


### Data Structures!!!
```
|--|
|--|
|--|
|--|
|"D"|   124
|"C"|   116
|"B"|   108
|"A"|   100

array = [] # ruby gives you 7 slots, memory address increase 8 bits per slot.

array[0] = "A"
array[1] = "B"
array[2] = "C"
array[3] = "D"
```


array[2]

- hits the first element checks its memory address in this case it is 100
- then ruby infers with some math 100 + (8 * 2)

array[998]
100 + (8 * 998)
Big O(1)




## Linked List

Each element/node points to the memory address of the next element. To reach a particular point on a linked list you'd have to hit each and every node.



```
node = head

2*times.do
	node = node.next_node
end
|--"rob"--|   127 | 421
|--"jenny"--|   421 | 708
|--"kevin"--|   708 | 23
|--"franco"--|   23 | nil
```

Trade off for making something faster generally means taking up more space.
