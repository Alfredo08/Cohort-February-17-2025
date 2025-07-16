
student_one = {
    "first_name" => "Alex",
    "last_name" => "Miller",
    "age" => 25
}

student_one["first_name"] = "Alexander"
puts student_one["first_name"]

student_two = {
    first_name: "Alex",
    last_name: "Miller",
    age: 25
}

puts student_two[:first_name]

student_three = {
    :first_name => "Alex",
    :last_name => "Miller",
    :age => 25
}

puts student_three[:first_name]