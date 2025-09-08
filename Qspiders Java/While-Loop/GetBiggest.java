import java.util.Scanner;

public class GetBiggest {
    public static int getBiggest(int n){
        int big = n%10;

        while (n>0) {
            int rem = n%10;
            if(rem>big){
                big = rem;
            }
            n/=10;
        }
        return big;
    }

//     public static int getBiggest(int n){
//         Scanner sc= new Scanner(System.in);
//         System.out.println("Enter the Number");
//         int n = sc.nextInt();
//         int digit = getBiggest(n);

//     }
    public static void main(String[] args) {
        System.out.println(getBiggest(47805));
    }
}