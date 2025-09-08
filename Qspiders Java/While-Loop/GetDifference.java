public class GetDifference {
    public static int getDifference(int n){
        int big = n%10;
        int small = n % 10;

        while (n>0){
            int rem = n%10;
            if(rem>big){
                big = rem;
            }
            if(rem < small){
                small = rem;
            }
            n/=10;
        } 
        return big-small;
    }
    public static void main(String[] args) {
        System.out.println(getDifference(457689));
    }
}
