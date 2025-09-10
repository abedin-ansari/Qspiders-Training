public class AddDigits {
    public static int addDigits(int n){
        while(n > 9){
            int sum = 0;
            while(n > 0){
                sum = sum + n%10;
                n/=10;
            }
            n=sum;
        }
        return n;
    }
    public static void main(String[] args) {
        System.out.println(addDigits(10));
    }
}