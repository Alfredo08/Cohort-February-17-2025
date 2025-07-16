num_one = 50
num_two = 30
num_three = 60
num_four = 51

# and or not && || !

if num_one < num_two
    puts "#{num_two} is greater than #{num_one}"
    if num_two > num_three
        puts "And it is also greater than #{num_three}"
    end
elsif num_one < num_three
    puts "#{num_three} is greater than #{num_one}"
end

message = "They are the same!" if num_one == num_four
puts message

message_two = num_one == num_four ? "They are the same!" : "The are not the same"
puts message_two