class Map
  attr_reader :arr

  def initialize
    @arr = []
  end

  def set(key, value)
    self.arr.each do |sub_arr|
      if sub_arr.first == key
        sub_arr[1] = value
        return
      end
    end
    self.arr << [key, value]
    return
  end

  def get(key)
    self.arr.each do |sub_arr|
      if sub_arr.first == key
        return sub_arr[1]
      end
    end
    return nil
  end

  def delete(key)
    self.arr.each_with_index do |sub_arr, idx|
      if sub_arr.first == key
        self.arr.delete_at(idx)
        return
      end
    end
  end

  def show
    p self.arr
  end
end
