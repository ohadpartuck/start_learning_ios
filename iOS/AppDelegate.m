#import "RCTPushNotificationManager.h"
#import "AppDelegate.h"

#import "RCTRootView.h"
#import <Parse/Parse.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [Parse setApplicationId:@"ZvSyh5fb19JQLYdK7Vm1wOmE1YNrNB9b79SHoxvg"
                clientKey:@"9fe7DgwEd3KBvHVvLZFdB7ZGX1bjffvZOKkEJVdP"];

  
  NSURL *jsCodeLocation;
  
  if (false){
      // development
      jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle"];
  }else{
      // production
      jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  }
  


  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"start_learning_ios"
                                                   launchOptions:launchOptions];

  UIUserNotificationType userNotificationTypes = (UIUserNotificationTypeAlert |
                                                  UIUserNotificationTypeBadge |
                                                  UIUserNotificationTypeSound);
  UIUserNotificationSettings *settings = [UIUserNotificationSettings settingsForTypes:userNotificationTypes
                                                                           categories:nil];
  [application registerUserNotificationSettings:settings];
  [application registerForRemoteNotifications];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [[UIViewController alloc] init];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
//  [RCTPushNotificationManager application:application didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
  
  // Store the deviceToken in the current installation and save it to Parse.
  PFInstallation *currentInstallation = [PFInstallation currentInstallation];
  [currentInstallation setDeviceTokenFromData:deviceToken];
  currentInstallation.channels = @[ @"global" ];
  [currentInstallation saveInBackground];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {
  [[NSNotificationCenter defaultCenter] postNotificationName:@"RemoteNotificationReceived"
                                                      object:self
                                                    userInfo:userInfo];
}



@end
