class LRUCache
  
  def initialize(n)
    @cache = []
    @size = n
  end

  def count
    # returns number of elements currently in cache
    return @cache.length
  end

  def add(el)
    # adds element to cache according to LRU principle
    if @cache.include?(el)
      @cache.delete(el)
      @cache << el
    elsif @cache >= @size
      @cache.shift
      @cache << el
    else
      @cache << el
    end
  end

  def show
    # shows the items in the cache, with the LRU item first
    p @cache
    return nil
  end

  private
  # helper methods go here!

end
