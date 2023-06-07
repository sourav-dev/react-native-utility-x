
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNUtilityxSpec.h"

@interface Utilityx : NSObject <NativeUtilityxSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Utilityx : NSObject <RCTBridgeModule>
#endif

@end
