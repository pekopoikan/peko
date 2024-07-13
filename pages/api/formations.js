/* Lib */
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

export default async function handler(
    req,
    res
) {
    try {
        const formations = await prisma.formations.findMany({
            include: {
                formation_profile: true,
                formation_team: {
                    include: {
                        teamninja_ninja: true,
                        teamninja_accessory: {
                            include: {
                                accessory: true
                            }
                        },
                        teamninja_gear: {
                            include: {
                                gear: true,
                                jades: {
                                    include: {
                                        jade: true
                                    }
                                }
                            }
                        },
                    }
                }
            },
        })
        res.status(200).json({ type: 'ok', data: formations })
    } catch (error) {
        res.status(500).json({ type: 'fail', reason: 'Unable to load formations' })
    }
}