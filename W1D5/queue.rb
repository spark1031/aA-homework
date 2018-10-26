class Queue
  attr_reader :arr

  def initialize
    @arr = []
  end

  def enqueue(el)
    self.arr.push(el)
  end

  def dequeue
    self.arr.shift
  end

  def peek
    return self.arr[0]
  end
end


if __FILE__ == $PROGRAM_NAME
  new_queue = Queue.new
  new_queue.enqueue("Sue")
  new_queue.enqueue("Eric")
  new_queue.enqueue("Josh")
  new_queue.enqueue("Sai")
  p new_queue.arr #=> ["Sue", "Eric", "Josh", "Sai"]
  p new_queue.peek #=> "Sue"
  new_queue.dequeue
  p new_queue.arr #=> [Eric", "Josh", "Sai"]
end
