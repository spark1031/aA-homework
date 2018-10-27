class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until self.game_over == true
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    if self.game_over == false
      round_success_message
      self.sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    print self.seq
    sleep(3)
    system("clear")
  end

  def require_sequence
    puts "What is the first color in the sequence?"
    input = gets.chomp
    if input != self.seq[0]
      self.game_over = true
      return
    end
    (self.sequence_length - 1).times do |idx|
      puts "What is the next color?"
      input = gets.chomp
      if input != self.seq[idx + 1]
        self.game_over = true
        return
      end
    end
  end

  def add_random_color
    random_color = COLORS.shuffle[0]
    self.seq << random_color
  end

  def round_success_message
    puts "You got the sequence correct!"
  end

  def game_over_message
    puts "GAME OVER"
  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = []
  end
end
