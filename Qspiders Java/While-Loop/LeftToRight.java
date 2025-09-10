public class LeftToRight {
    public static void printDigitLeftToRight(int n){
        int count = (n+"").length();
        while(count>0){
            int digit = (n/(int)Math.pow(10, count-1)%10);
            System.out.println(digit);
            count--;
        }
    }
    public static void main(String[] args) {
        printDigitLeftToRight(27);
    }
}