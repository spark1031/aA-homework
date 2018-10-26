class Stack
  attr_reader :arr

  def initialize
    @arr = []
  end

  def push(el)
    self.arr.push(el)
  end

  def pop
    self.arr.pop
  end

  def peek
    return self.arr[-1]
  end
end

if __FILE__ == $PROGRAM_NAME
  new_stack = Stack.new
  new_stack.push(1)
  new_stack.push("hello")
  new_stack.push(7)
  p new_stack.arr #=> [1,"hello",7]
  new_stack.pop
  p new_stack.arr #=> [1,"hello"]
  p new_stack.peek #=> "hello"
end
