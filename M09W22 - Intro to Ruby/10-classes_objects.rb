
class Book
    # Attributes
    attr_accessor :title, :authors, :genre

    # Constructor
    def initialize title, authors, genre
        # Attributes
        @title = title
        @authors = authors
        @genre = genre
    end

    # Methods
    def print_book_info
        puts "Title: #{@title}"
        puts "Authors: #{@authors}"
        puts "Genre: #{@genre}"
    end

    # Getters and setters
    def get_title
        @title
    end

    def set_title new_title
        @title = new_title
    end

end

book_one = Book.new "Book A", ["Author 1", "Author 2"], "Fantasy"

puts book_one
book_one.print_book_info
puts book_one.get_title
book_one.set_title "Book AAA"
book_one.genre = "Horror"
book_one.print_book_info

book_two = Book.new "Book B", ["Author 3"], "Recipe"
book_two.print_book_info