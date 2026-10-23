#include <array>
#include <clocale>
#include <cstdlib>
#include <ctime>
#include <iostream>
#include <string>
#include <vector>

std::string GeneratePassword()
{
    const std::array<std::string, 26> lowerLetters = {
        "a", "b", "c", "d", "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z"
    };

    const std::array<std::string, 26> upperLetters = {
        "A", "B", "C", "D", "E", "F", "G", "H", "I",
        "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"
    };

    const std::array<std::string, 16> polishLetters = {
        "ą", "ę", "ł", "ń", "ó", "ś", "ż", "ź",
        "Ą", "Ę", "Ł", "Ń", "Ó", "Ś", "Ż", "Ź"
    };

    const std::array<std::string, 10> digits = {
        "0", "1", "2", "3", "4",
        "5", "6", "7", "8", "9"
    };

    const std::array<std::string, 12> specialSymbols = {
        "!", "@", "#", "$", "%", "^",
        "&", "*", "(", ")", "_", "+"
    };

    std::vector<std::string> password = {};

    password.emplace_back(lowerLetters[rand() % lowerLetters.size()]);
    password.insert(password.begin() + rand() % password.size(), upperLetters[rand() % upperLetters.size()]);
    for (int i = 0; i < 2; ++i) {
        password.insert(password.begin() + rand() % password.size(), lowerLetters[rand() % lowerLetters.size()]);
        password.insert(password.begin() + rand() % password.size(), upperLetters[rand() % upperLetters.size()]);
        password.insert(password.begin() + rand() % password.size(), polishLetters[rand() % polishLetters.size()]);
        password.insert(password.begin() + rand() % password.size(), digits[rand() % digits.size()]);
        password.insert(password.begin() + rand() % password.size(), specialSymbols[rand() % specialSymbols.size()]);
    }

    std::string strPassword = "";
    for (const std::string& l : password)
        strPassword += l;

    return strPassword;
}

int main()
{
    std::setlocale(LC_ALL, "");
    std::locale::global(std::locale(""));

    std::srand(std::time(nullptr));

    std::cout << "=========================\n";
    std::cout << "Generowanie 5 haseł:\n";
    std::cout << "=========================\n\n";

    for (int i = 0; i < 5; ++i) {
        std::cout << "Hasło " << i << ": " << GeneratePassword() << "\n";
    }

    std::cout << "\n";
    std::cout << "=========================\n";

    return 0;
}
