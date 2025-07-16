=begin
    const greeting = (name, callback) => {
        callback();
        console.log(name);
        console.log("See you around!");
    }

    const printHello = () => {
        console.log("Hello there!");
    }

    greeting("Alex", printHello);
=end

def greeting name
    yield
    puts name
    puts "See you around!"
end

def print_hello
    puts "Hello there!"
end

greeting "Alex" do
    print_hello
end