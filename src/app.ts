/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
	Actor,
	ButtonBehavior,
	Collider,
	ColliderGeometry,
	CollisionLayer,
	Context,
	DegreesToRadians,
	Quaternion,
	TextAnchorLocation,
	User,
	Vector3
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

export default class HelloWorld {
	public expectedResultDescription = "Different grabbable items.";

	constructor(private context: Context, private baseUrl: string) {
		this.context.onUserJoined((user) => this.userJoined(user));
	}

	// Create list to keep track of items attached to users.
	private attachedItems: {[id: string]: Actor} = {};

    private userJoined(user: User) {
        // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "Andy") {
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1462568090112884984",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'head'
                    },
                    transform: {local: {
                        position: { x: 0, y: 0.09, z: 0 },
                        scale: { x: 0.13, y: 0.13, z: 0.13},

                    }}
                }
            });
        // Code to run when a user joins.
            console.log(`User joined: ${user.name}`);
            console.log(user);
            if (user.name === "Andy") {
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1463809619162825377",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'spine-middle'
                    },
                    transform: {local: {
                        position: { x: 0, y: -1.45, z: 0 },
                        scale: { x: 0.033, y: 0.033, z: 0.033},

                    }}
                }
            });
        }
    }
}
}
