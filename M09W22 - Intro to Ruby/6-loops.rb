
i = 1

while i <= 3
    puts i
    i += 1
end

puts "-----"

i = 1
loop do
    puts i
    i += 1
    break if i > 3
end

puts "-----"

(1..3).each do |num|
    puts num
end

puts "-----"

names = ["Alex", "Martha", "Roger", "Julie", "Alan"]
names.each do |element|
    puts element
end

puts "-----"

names = ["Alex", "Martha", "Roger", "Julie", "Alan"]
names.each_with_index do |element, index|
    puts "#{element} - #{index}"
end
