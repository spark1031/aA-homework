#O(n^2)
def sluggish_octopus(fish_arr)
  largest = "fish"
  fish_arr.each_with_index do |fish1, idx1|
    fish_arr.each_with_index do |fish2, idx2|
      next if idx2 == idx1
      largest = fish1 if fish1.length > fish2.length
    end
  end
  return largest
end

#nlogn
def dominant_octopus(fish_arr)
  prc = Proc.new {|x, y| y.length <=> x.length}
  sorted = fish_arr.merge_sort(&prc)
  return sorted[0]
end

#linear search/O(n)
def clever_octopus(fish_arr)
  largest = fish_arr.pop
  fish_arr.each do |fish|
    largest = fish if fish.length > largest.length
  end
  return largest
end

#O(n)
def slow_dance(direction_str, tiles_arr)
  tiles_arr.each_with_index do |direction, tentacle|
    return tentacle if direction == direction_str
  end
end

#O(1)
new_tiles_data_structure = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
}
def fast_dance(direction_str, new_tiles_data_structure)
  return new_tiles_data_structure[direction_str]
end
