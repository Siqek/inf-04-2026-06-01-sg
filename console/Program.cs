char[] lowers = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };
char[] uppers = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };
char[] others = { 'ą', 'ę', 'ł', 'ń', 'ó', 'ś', 'ż', 'ź', 'Ą', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ż', 'Ź' };
char[] specials = { '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+' };
char[] digits = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

for (int i = 0; i < 5; ++i)
{
    Console.WriteLine(GeneratePassword());
}


String GeneratePassword()
{
    String password = "";

    Random rnd = new Random();

    // 3 lowers
    for (int i = 0; i < 3; ++i)
    {
        char randomLower = lowers[rnd.Next(lowers.Length)];
        password = PlaceCharInRandomPossition(password, randomLower);
    }

    // 3 uppers
    for (int i = 0; i < 3; ++i)
    {
        char randomUpper = uppers[rnd.Next(uppers.Length)];
        password = PlaceCharInRandomPossition(password, randomUpper);
    }

    // 2 others
    for (int i = 0; i < 2; ++i)
    {
        char randomOther = others[rnd.Next(others.Length)];
        password = PlaceCharInRandomPossition(password, randomOther);
    }

    // 2 specials
    for (int i = 0; i < 2; ++i)
    {
        char randomSpecial= specials[rnd.Next(specials.Length)];
        password = PlaceCharInRandomPossition(password, randomSpecial);
    }

    // 2 digits
    for (int i = 0; i < 2; ++i)
    {
        char radnomDigit = digits[rnd.Next(digits.Length)];
        password = PlaceCharInRandomPossition(password, radnomDigit);
    }

    return password;
}

String PlaceCharInRandomPossition(String str, char c)
{
    Random random = new Random();

    int randPos = random.Next(str.Length);

    return str.Substring(0, randPos) + c.ToString() + str.Substring(randPos);
}
