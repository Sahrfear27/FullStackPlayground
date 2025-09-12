package OOP;

public class Account {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("fullname", "fullname@gmail.com", 000000000, 0000);
        account.setAccount(9910033);
        account.setName("Sahrfear");
        account.setEmail("Sahrfear@gmail.com");
        account.setAmount(190);

        System.out.println(account);
    }
}

class BankAccount {
    private String name;
    private String email;
    private long account_number;
    private float amount;

    BankAccount(String name, String email, long account_number, float amount) {
        this.name = name;
        this.email = email;
        this.account_number = account_number;
        this.amount = amount;
    }

    public void setAccount(long accno) {
        this.account_number = accno;
    }

    public void getAccount() {
        System.out.println("Account Number" + this.account_number);
    }

    public void setName(String username) {
        this.name = username;
    }

    public void getName() {
        System.out.println("The name is " + this.name);
    }

    public void setEmail(String Email) {
        this.email = Email;
    }

    public void getEmail() {
        System.out.println("The email is " + this.email);
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public void getAmount() {
        System.out.println("Amount is " + this.amount);
    }

    public String toString() {
        return "Account Details {" +
                "Name = '" + name + '\'' +
                ", Email = '" + email + '\'' +
                ", Account Number = " + account_number +
                ", Amount = " + amount +
                '}';
    }
}