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
