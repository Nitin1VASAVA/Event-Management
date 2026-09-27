// // // // #include <stdio.h>

// // // // int main()
// // // // {
// // // //     char vowels[] ="aeiou";
// // // //     char name[] = "nitin";
// // // //     char len = 0;
// // // //     for (int i = 0; name[i] != '\0'; i++)
// // // //     {
// // // //         for (int j = 0; vowels[j] !='\0'; i++)
// // // //         {

// // // //         }

// // // //     }
// // // //     printf("%d",len);

// // // //     return 0;
// // // // }

// // // #include <stdio.h>

// // // int main()
// // // {
// // //     char name[] = "nitinn";

// // //     for (int i = 0; name[i] != '\0'; i++)
// // //     {
// // //         int count = 1;
// // //         int alreadyCounted = 0;

// // //         // Check whether this character was already counted
// // //         for (int k = 0; k < i; k++)
// // //         {
// // //             if (name[i] == name[k])
// // //             {
// // //                 alreadyCounted = 1;
// // //                 break;
// // //             }
// // //         }

// // //         if (alreadyCounted)
// // //         {
// // //             continue;
// // //         }

// // //         // Count character
// // //         for (int j = i + 1; name[j] != '\0'; j++)
// // //         {
// // //             if (name[i] == name[j])
// // //             {
// // //                 count++;
// // //             }
// // //         }

// // //         printf("%c = %d\n", name[i], count);
// // //     }

// // //     return 0;
// // // }
// // #include <stdio.h>

// // int main()
// // {
// //     char vowels[] = "aeiou";
// //     char name[] = "amii";

// //     for (int i = 0; vowels[i] != '\0'; i++)
// //     {
// //         int count = 1;
// //         int alreaduCount = 0;
// //         for (int k = 0; k < i; k++)
// //         {
// //             if()
// //         }

// //         for (int j = 0; name[j] != '\0'; j++)
// //         {
// //             if(vowels[i] == name[j]){
// //                 printf("%c",name[j]);
// //             }
// //         }
// //     }

// //     return 0;
// // }

// #include <stdio.h>

// int main()
// {
//     int n = 100;
//     for (int i = 1; i <= n; i++)
//     {
//         int num = i;
//         while (num > 0)
//         {
//             int demo = num % 10;

//             if (demo == 7)
//             {
//                 printf("%d", num);
//                 break;
//             }
//             num = num / 10;
//         }
//     }

//     return 0;
// }


#include <stdio.h>

int main()
{
    int num[] = {1,2,3,4,5};
    int n = 5;
    int max = 0;
    // int avg = 0;
    for (int  i = 0; i < n; i++)
    {
        if(num[i] > max){
            max = num[i];
        }
    }
    printf("%d",max);

    

    return 0;
}