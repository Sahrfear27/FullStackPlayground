package OOP;

/**
 * It is the techniques in which one classes inherit the behavior from another
 * class ususally from the base class.
 * Inheritance can be implemented using either extend or implement
 * 
 * Note: Multiple inheritance is not supported in java
 * Multiple inheritance is done through interfaces.
 * Class can be implemented using interfaces
 * 
 * 
 * Why Use Inheritance:
 * 1. Code reusability
 * 2. Method Overriding : Redefining the super class Method in the base class:
 * When a sub class provide it own implementat
 * 3. Abstraction: Hiding the internal details and showing only the
 * functionality
 **/

public class Inheritance {
    public static void main(String[] args) {
        SavingAccount sahrfear = new SavingAccount("Sahrfear", 202399, 20000);
        sahrfear.deposit(200);
        sahrfear.withdraw(150);
        sahrfear.addInterest();

        System.out.println("\n");
        CurrentAccount alex = new CurrentAccount("Alex", 2911, 12400);
        alex.deposit(100);
        alex.withdraw(12600);
        alex.withdraw(600);
        // alex.withdraw(10000);
        // alex.withdraw(2500);
        // alex.withdraw(200);
        // alex.withdraw(500);

    }
}

abstract class BankAccounts {
    String accountHolder;
    long accountNum;
    float balance;

    BankAccounts(String holder, long accountnum, float amount) {
        this.accountHolder = holder;
        this.accountNum = accountnum;
        this.balance = amount;
    }

    // Method to be overriden
    abstract void deposit(float amount);

    abstract void withdraw(float amount);

    public void showBalance() {
        System.out.println(this.accountHolder + " has balance $" + this.balance);
    }
}

class SavingAccount extends BankAccounts {
    private static final float INTEREST_RATE = (float) 0.3;
    private static final int WITHDRAW_LIMIT = 5000;

    SavingAccount(String name, long accountum, float amount) {
        super(name, accountum, amount);
    }

    @Override
    void deposit(float amount) {
        this.balance += amount;
        System.out.println("An Amount of " + amount + "was deposited to your account");
        this.showBalance();
    }

    @Override
    void withdraw(float amount) {
        if (amount > balance) {
            System.out.println("Insufficient Fund");
        } else if (amount > WITHDRAW_LIMIT) {
            System.out.println("Withdrawal Limit exceeded for saving account");
        } else {
            this.balance -= amount;
            System.out.println(this.accountHolder + " withdraw $" + amount);
        }
        this.showBalance();
    }

    public void addInterest() {
        float interest = this.balance * INTEREST_RATE;
        this.balance += interest;
        System.out.println("Interest of " + interest + " was added to savings");
        this.showBalance();
    }
}

class CurrentAccount extends BankAccounts {
    private static final float OVER_DRAFT = -500;

    CurrentAccount(String name, long accountum, float amount) {
        super(name, accountum, amount);
    }

    @Override
    void deposit(float amount) {
        this.balance += amount;
        System.out.println("An Amount of " + amount + " was deposited to your account");
        this.showBalance();
    }

    @Override
    void withdraw(float amount) {
        if (this.balance - amount < OVER_DRAFT) {
            System.err.println("Overdraft exceeded");
            this.showBalance();
        } else {
            this.balance -= amount;
            System.out.println("Amount of $" + amount + " was withdraw");
        }
        this.showBalance();
    }
}