class Board
  attr_accessor :cups
  attr_reader :name1, :name2

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    self.cups.each_with_index do |cup, idx|
      4.times {cup << :stone} if idx != 6 || idx != 13
    end

    self.cups[6].clear
    self.cups[13].clear

  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless start_pos >= 0 && start_pos < 13
    raise "Starting cup is empty" if self.cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones = self.cups[start_pos]
    self.cups[start_pos] = []

    cup_idx = start_pos
    until stones.empty?
      cup_idx += 1
      cup_idx = 0 if cup_idx > 13
      if cup_idx == 6
        self.cups[6] << stones.pop if current_player_name == @name1
      elsif cup_idx == 13
        self.cups[13] << stones.pop if current_player_name == @name2
      else
        self.cups[cup_idx] << stones.pop
      end
    end

    self.render
    return next_turn(cup_idx)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_idx == 13
      return :prompt
    elsif self.cups[ending_cup_idx].length == 1
      return :switch
    else
      return ending_cup_idx
    end

  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    self.cups.take(6).all? { |cup| cup.empty? } || self.cups[7..12].all? { |cup| cup.empty? }
  end

  def winner
    player1_count = self.cups[6].length
    player2_count = self.cups[13].length
    if player1_count == player2_count
      return :draw
    elsif player1_count > player2_count
      return @name1
    else
      return @name2
    end
  end
end
